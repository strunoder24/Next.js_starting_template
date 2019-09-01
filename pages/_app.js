import React from 'react'
import App from 'next/app'

import '~/styles/blank_boy.sass' //прочитай меня

//Для нормальной работы дев сервака необходимо дополнительно импортировать все стили в этот файл, иначе грузятся они через хуй
import '~/styles/global_styles.sass'
import '~p/p/scoped.module.sass'

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        return <Component {...pageProps} />
    }
}

export default MyApp