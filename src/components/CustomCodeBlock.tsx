import React, { useState } from 'react'
import CodeBlock from '@theme/CodeBlock'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import classnames from "classnames";

import ccb from "../css/customcodeblock.module.css";

export default function CustomCodeBlock({
  snippets,
}) {

  return (
    <>
      <div className={ccb.wrap}>
        <>
        <Tabs
            className={classnames("codeblocktabs",ccb.tabs)}
            defaultValue={snippets[0].header}
            values={snippets.map(snip => ({label: snip.header, value: snip.header}))}>
          {snippets.map(({ language, code, header, highlight }, idx) => (
                <TabItem value={header} className={ccb.tabitem}>
                    <CodeBlock className={classnames(language,ccb.codeblock)} metastring={highlight}>
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