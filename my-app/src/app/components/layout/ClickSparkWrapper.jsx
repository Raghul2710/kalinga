'use client'

import ClickSpark from '../reactbits/ClickSpark'

export default function ClickSparkWrapper({ children }) {
  return (
    <ClickSpark
      sparkColor="#ea580c"
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      {children}
    </ClickSpark>
  )
}

