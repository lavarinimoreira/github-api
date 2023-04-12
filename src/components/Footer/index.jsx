import React from 'react'
import { FooterContainer, Content, Link } from './styles'

const Footer = function() {
  return (
    <FooterContainer>
        <Content>
            Built by <Link href='https://lavarinimoreira.me'>Gabriel Lavarini</Link>
        </Content>
    </FooterContainer>
  )
}

export default Footer;