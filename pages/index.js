import React from 'react'
import propTypes from 'prop-types'
import Link from 'next/link'

import Layout from '../layouts/defaut'

const PostLink = props => (
    <li>
        <Link href={`/p/[id]`} as={`/p/${props.id}`}>
            <a>{props.id}</a>
        </Link>
    </li>
);

export default class extends React.Component {

    static propTypes = {};

    state = {
        number: 1,
    };

    render() {
        return (
            <Layout>
                <h1>My blog</h1>
                <ul>
                    <PostLink id='Hello-Next.js' />
                    <PostLink id='Learn-Next.js-is-awesome' />
                    <PostLink id='Deploy-apps-with-Zeit' />
                </ul>
            </Layout>
        )
    }
}