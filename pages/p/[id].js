import { useRouter } from 'next/router';
import React from 'react'
import axios from 'axios'

import Layout from '../../layouts/defaut'

export default class extends React.Component {

    static getInitialProps = async function (context) {
        const {id} = context.query;
        const {data} = await axios.get(`https://api.tvmaze.com/shows/${id}`);

        console.log(data.name);

        return {
            show: data
        }
    };

    render() {
        return (
            <Layout>
                <h1>{this.props.show.name}</h1>
                <p>{this.props.show.summary.replace(/<[/]?p>/g, '')}</p>
                {/*<p>{this.props.show.summary}</p>*/}
                {/*<div dangerouslySetInnerHTML={{__html: this.props.show.summary}} />*/}
                <img src={this.props.show.image.medium}/>
            </Layout>
        )
    }
}