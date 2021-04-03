import TopBar from "../layout/TopBar";
import Layout from "../layout/Layout";
import Container from "../layout/Container";
import UserProvider from "../store/user";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Container>
        <Layout background>
          <TopBar />
        </Layout>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Container>
    </UserProvider>
  );
}

export default MyApp;
