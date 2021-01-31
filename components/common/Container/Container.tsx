import React from 'react';
import cn from 'classnames'

import styles from './Container.module.scss';


interface IProps {
    className?: string;
    children: any
}

const Container: React.FC = ({ className, children }: IProps) => {

    return (
        <div className={cn(styles.container, className)}>
            {children}
        </div>
    )
}


export default Container;