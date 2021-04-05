import { render as r, fireEvent, waitFor } from "@testing-library/react";
import api from "../utils/api";
import Login from "../pages/login";
import { UserProviderTest, UserContextState } from "../store/user";
import { useRouter } from "next/router";

jest.mock("next/router", () => ({
  __esModule: true,
  useRouter: jest.fn(),
}));

describe("Login", () => {
  const render = () => {
    const Store = ({ children }) => {
      const context: UserContextState = {
        user: {
          id: "",
          name: "",
          email: "",
          password: "",
          team: "",
        },
        updateUser: () => {},
      };

      return <UserProviderTest value={context}>{children}</UserProviderTest>;
    };

    return r(
      <Store>
        <Login />
      </Store>,
    );
  };

  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it("displays the correct form", async () => {
    const { getByLabelText } = render();

    expect(getByLabelText("Password")).toBeInTheDocument();
    expect(getByLabelText("Email")).toBeInTheDocument();
  });

  it("validates the form", async () => {
    const { getByText, getByPlaceholderText } = render();

    const emailInput = getByPlaceholderText("Email");
    const passwordInput = getByPlaceholderText("Password");

    fireEvent.blur(emailInput);
    fireEvent.blur(passwordInput);

    await waitFor(() => {
      expect(getByText("Password required")).toBeInTheDocument();
      expect(getByText("Email required")).toBeInTheDocument();
    });
  });

  it("submits and redirects you", async () => {
    fetchMock.mockResponseOnce(
      JSON.stringify({ email: "sam@ojling.com", password: "123456" }),
    );

    const mockRouter = {
      push: jest.fn(),
    };
    (useRouter as jest.Mock).mockReturnValue(mockRouter);

    const { getByText, getByPlaceholderText } = render();

    const emailInput = getByPlaceholderText("Email");
    const passwordInput = getByPlaceholderText("Password");

    fireEvent.blur(emailInput);
    fireEvent.blur(passwordInput);

    fireEvent.change(emailInput, {
      target: { value: "sam@ojling.com" },
    });
    fireEvent.change(passwordInput, {
      target: { value: "123456" },
    });

    const button = getByText("Login");
    expect(button).toBeInTheDocument();

    fireEvent.click(button);

    await waitFor(() => {
      expect(mockRouter.push).toHaveBeenCalledWith("/");
    });
  });

  it("submits the form correctly", async () => {
    const formData = { email: "sam@ojling.com", password: "123456" };
    fetchMock.mockResponseOnce(JSON.stringify(formData));

    api("/login", "POST", formData).then((data) => {
      expect(data).toEqual({ email: "sam@ojling.com", password: "123456" });
    });

    expect(fetchMock.mock.calls[0][0]).toEqual("/api/login");
  });
});
