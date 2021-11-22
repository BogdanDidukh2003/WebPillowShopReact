import React from 'react';
import Loader from 'react-loader-spinner';
import styles from './MyLoader.module.css';

interface MyLoaderProps {
    isLoading: boolean;
}
export const MyLoader = (props: MyLoaderProps) => {
    return <>
        {
            props.isLoading && <div className={styles.container}> <Loader type="ThreeDots" color="black" height={80} width={80} /> </div>
        }
    </>

}