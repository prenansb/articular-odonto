import styled from 'styled-components'

export const Footer = styled.footer`
  margin-top: 64px;
  padding: 0 24px;
`

export const Line = styled.div`
  border: 1px solid #9ca8b7;
`

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 24px 0 56px;
`

export const Address = styled.div`
  h4 {
    font-weight: 600;
    font-size: 20px;
    line-height: 27px;
    color: #515c6b;
  }

  span {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #7c8999;
  }
`

export const Contact = styled.div`
  margin: 32px 0 56px;

  h4 {
    font-weight: 600;
    font-size: 20px;
    line-height: 27px;
    color: #515c6b;
  }
  span {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #7c8999;
  }
`

export const SiteMap = styled.div`
  margin-top: 24px;

  span {
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    color: #586474;
  }
`

export const Links = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const Link = styled.li`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #7c8999;
`

export const Social = styled.div`
  margin: 24px 0 32px;

  span {
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    color: #586474;

    margin-bottom: 16px;
  }
`

export const SocialList = styled.ul`
  display: flex;
  align-items: center;
  gap: 16px;

  margin-top: 24px;
`

export const SocialIcon = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 8px;
  background: #515c6b;
  border-radius: 4px;
`

export const Copyrights = styled.div`
  margin-top: 24px;

  display: flex;
  flex-direction: column;
`

export const Rights = styled.span`
  text-align: center;

  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  color: #475567;
`

export const Developed = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;

  margin: 32px 0 40px;

  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  color: #586474;
`
