import React from "react";
import UnsubscribeForm from "../../components/Forms/UnsubscribeForm";
import Layout from "../../components/Layout/layout";

import Seo from "../../components/Seo/seo";
import "./styles.scss";

const Unsubscribe = (props) => {
  return (
    <React.Fragment>
      <Layout>
        <Seo
          title="Kraftshala | Unsubscribe Email"
          description=""
          url="https://www.kraftshala.com/unsubscribe/"
          noIndex={true}
        />

        <div className="unsubscribe">
          <UnsubscribeForm search={props.location.search} />
        </div>
      </Layout>
    </React.Fragment>
  );
};

export default Unsubscribe;
