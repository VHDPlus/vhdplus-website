import React, { useEffect } from "react";

function Hello() {
  var url = "https://discord.gg/NCN9VAh";
  useEffect(() => {
    window.location.href = url;
  }, []);

  return (
    <div>
      <h2>Redirecting to <a href={url}>{url}</a></h2>
    </div>
  );
}

export default Hello;