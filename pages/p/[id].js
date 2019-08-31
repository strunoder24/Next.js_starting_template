import { useRouter } from 'next/router';
import React from 'react'

import Layout from '../../layouts/defaut'

export default () => {
    let router = useRouter();

    return (
        <Layout>
            <h1>Post id is {router.query.id}</h1>
            <p>This is my post content</p>
        </Layout>
    )
};