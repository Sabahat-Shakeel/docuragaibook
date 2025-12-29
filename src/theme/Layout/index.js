// website/src/theme/Layout/index.js
import React from 'react';
import Layout from '@theme-original/Layout';
import Chatbot from '@site/src/components/Chatbot';

export default function LayoutWrapper(props) {
  return (
    <>
      <Layout {...props} />
      {/* Integrate the Chatbot component */}
      <Chatbot />
    </>
  );
}