import React, { useState } from 'react'
import CodeBlock from '@theme/CodeBlock'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import classnames from "classnames";

import ccb from "../css/customcodeblock.module.css";

export default function CustomCodeBlock({
  snippets,
  header,
}) {

  return (
    <>
      <div className={classnames("codeblockWrapper", ccb.wrap)}>
        <>
        <p className={ccb.header}>{header}</p>
        <Tabs
            className={classnames("codeblocktabs",ccb.tabs)}
            defaultValue={snippets[0].header}
            values={snippets.map(snip => ({label: snip.header, value: snip.header}))}>
          {snippets.map(({ language, code, header, highlight }, idx) => (
                <TabItem key={idx} value={header} className={ccb.tabitem}>
                    <CodeBlock className={classnames(language)} metastring={highlight}>
                    {code}
                    </CodeBlock>
                </TabItem>
          ))}
          </Tabs>
        </>
      </div>
    </>
  )
}