import TopBar from "../layout/TopBar";
import Container from "../layout/Container";
import Layout from "../layout/Layout";
import UserProviderWrapper from "../store/user";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <UserProviderWrapper>
      <Layout>
        <Container background>
          <TopBar />
        </Container>
        <Container>
          <Component {...pageProps} />
        </Container>
      </Layout>
    </UserProviderWrapper>
  );
}

export default MyApp;
