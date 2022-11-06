import React from 'react'
import Head from 'next/head'

const Layout = ({ children, tituloPestaña }) => {
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