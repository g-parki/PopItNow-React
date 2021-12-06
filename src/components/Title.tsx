import * as React from 'react'

interface TitleProps {

}

const Title: React.FunctionComponent<TitleProps> = () => (
  <div className="title-container">
    <div className="title-top-row">Pop It.</div>
    <br />
    <div className="title-bottom-row">Now.</div>
  </div>
)

export default Title
