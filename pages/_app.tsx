import TopBar from "../layout/TopBar";
import Container from "../layout/Container";
import Layout from "../layout/Layout";
import UserProvider from "../store/user";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Layout>
        <Container background>
          <TopBar />
        </Container>
        <Container>
          <Component {...pageProps} />
        </Container>
      </Layout>
    </UserProvider>
  );
}

export default MyApp;
