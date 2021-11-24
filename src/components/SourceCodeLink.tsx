import * as React from 'react';

interface SourceCodeProps {
    
}
 
const SourceCodeLink: React.FunctionComponent<SourceCodeProps> = () => {
    const GITHUB_LINK = "https://github.com/g-parki/PopItNow-React"
    const LOGO_LINK = process.env.PUBLIC_URL + "/GitHub-Mark-120px-plus.png"
    return (<a href={GITHUB_LINK}><img className="logo" src={LOGO_LINK} alt={"Didn't load"}/></a>);
}
 
export default SourceCodeLink;