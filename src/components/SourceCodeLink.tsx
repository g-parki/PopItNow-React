import * as React from 'react';

interface SourceCodeProps {
    
}
 
const SourceCode: React.FunctionComponent<SourceCodeProps> = () => {
    const GITHUB_LINK = "https://github.com/g-parki/PopItNow-React"
    const LOGO_LINK = process.env.PUBLIC_URL + "/GitHub-Mark-120px-plus.png"
    return ( <div className="nav"><a href={GITHUB_LINK}><img className="logo" src={LOGO_LINK} alt={"Didn't load"}/></a></div>);
}
 
export default SourceCode;