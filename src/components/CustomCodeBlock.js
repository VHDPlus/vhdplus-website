import React, { useState } from 'react'
import CodeBlock from '@theme/CodeBlock'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

export default function CustomCodeBlock({
  snippets,
}) {

  let wrapperClass = ''

  return (
    <>
      <div className={wrapperClass}>
        <>
        <Tabs
            defaultValue={snippets[0].header}
            values={snippets.map(snip => ({label: snip.header, value: snip.header}))}>
          {snippets.map(({ language, code, header, highlight }, idx) => (
                <TabItem value={header}>
                    <CodeBlock className={language} metastring={highlight}>
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