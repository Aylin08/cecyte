import React, {ReactNode} from 'react'
import Head from 'next/head'


interface Props {
    children?: ReactNode,
    tituloPestaña?:ReactNode
    // any props that come into the component
  }
  

const Layout = ({ children, tituloPestaña }: Props) => {
    return (
        <div>
            <Head>
                <title>
                    CECyTE- {tituloPestaña}
                </title>

            </Head>
            {children}
        </div>
    )
}

export default Layout