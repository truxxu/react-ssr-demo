import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Layout from '../../components/layout'

const FirstPost = () => {
    return (
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>
            <h1>First Post</h1>
            <p>Hello World</p>
        </Layout>
    )
}

export default FirstPost
