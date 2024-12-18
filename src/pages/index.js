import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <h1 className="hero__title">{siteConfig.title}</h1>
                <p className="hero__subtitle">{siteConfig.tagline}</p>
                <div className={styles.buttons}>
                    <Link
                        className="button button--secondary button--lg"
                        to="/3.0/tutorial/getting-started/prerequisites">
                    Scratch 3.0
                    </Link>

                    <Link
                        className="button button--secondary button--lg"
                        to="/2.0/tutorial/getting-started/prerequisites">
                    Scratch 2.0
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default function Home() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout description="Tutorial for modding Scratch 3.0 and Scratch 2.0">
            <HomepageHeader />
        </Layout>
    );
}
