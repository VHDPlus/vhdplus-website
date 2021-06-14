import React from 'react';
import Layout from '@theme/Layout';

function Hello() {
  return (
    <Layout title="Snapcraft-Vetting">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}>
        <p>
            This post was created by us:<br/>
            <a href="https://forum.snapcraft.io/t/request-for-classic-confinement-vhdplus/24898">https://forum.snapcraft.io/t/request-for-classic-confinement-vhdplus/24898</a>

            <br/>Contact:<br/>
            hmennen@vhdplus.com
        </p>
      </div>
    </Layout>
  );
}

export default Hello;