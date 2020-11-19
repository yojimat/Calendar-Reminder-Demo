import React from 'react'
import { A, Footer } from './myFooter.styles';
import SocialSVG from './SocialSVG';

const MyFooter = () => {
    return (
        <Footer className="pb4 ph3 ph5-ns tc">
            <A href="https://github.com/yojimat" title="GitHub" target="blank">
                <SocialSVG nomeSocial="GitHub" />
            </A>
            <A href="https://www.linkedin.com/in/vntc-fullstack/" title="Linkedin" target="blank">
                <SocialSVG nomeSocial="Linkendin" />
            </A>
        </Footer>
    )
}

export default MyFooter;