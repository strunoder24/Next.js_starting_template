import React from 'react'
import Link from 'next/link'
import axios from 'axios'

import Layout from '~/layouts/defaut'

const Index = props => (
    <Layout>
        <h1>Batman TV Shows</h1>
        <ul>
            {props.shows.map(show => (
                <li key={show.id}>
                    <Link href="/p/[id]" as={`/p/${show.id}`}>
                        <a>{show.name}</a>
                    </Link>
                </li>
            ))}
        </ul>
    </Layout>
);

Index.getInitialProps = async function() {
    const res = await axios.get('https://api.tvmaze.com/search/shows?q=batman');
    const data = res.data;

    return {
        shows: data.map(entry => entry.show)
    };
};

export default Index