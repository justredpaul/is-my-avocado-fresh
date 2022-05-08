import * as React from 'react';

type TProps = {
    className: string;
    sources: {
        srcSet: string;
        media?: string;
        type?: string;
    }[];
    default: string;
    alt: string;
}

export const Picture = (props: TProps) => (
    <picture className={props.className}>
        {props.sources.map(source => (
            <source srcSet={source.srcSet}
                media={source.media}
                type={source.type} />
        ))}
        <img src={props.default} alt={props.alt} />
    </picture>
);
