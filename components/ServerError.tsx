import ErrorMessage from "./ErrorMessage";

const ServerError = ({ message }) => {
  return (
    <div className="bg-red-50 border-red-200 border rounded-sm p-2 pb-1 mb-3">
      <ErrorMessage message={message} />
    </div>
  );
};

export default ServerError;
