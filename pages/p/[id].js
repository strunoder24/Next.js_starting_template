import React from 'react'
import axios from 'axios'

import style from './scoped.module.sass'
import Layout from '~/layouts/defaut'

export default class extends React.Component {
    static getInitialProps = async function (context) {
        const {id} = context.query;
        const {data} = await axios.get(`https://api.tvmaze.com/shows/${id}`);

        return {
            show: data
        }
    };

    render() {
        return (
            <Layout>
                <h1>{this.props.show.name}</h1>
                <p className={'simpleStyle ' + style.boah}>{this.props.show.summary.replace(/<[/]?p>/g, '')}</p>
                <img src={this.props.show.image.medium}/>
            </Layout>
        )
    }
}