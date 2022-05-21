import * as React from 'react';
import { styled } from '../../../stitches.config';

const Wrapper = styled('label', {
    display: 'flex',
    alignItems: 'center',

    marginBottom: '$s4',
});

const Input = styled('input', {
    appearance: 'none',
});

const FakeInput = styled('span', {
    width: '28px',
    height: '28px',

    marginRight: '$s3',

    border: '3px solid $blue',
    borderRadius: '$r1',

    variants: {
        focused: {
            true: {
                borderColor: '$primary'
            }
        },
        checked: {
            true: {
                backgroundColor: '$blue',
            }
        },
        indeterminate: {
            true: {
                backgroundImage: 'linear-gradient(45deg, transparent, transparent 49%, $blue 50%, $blue 100%)'
            }
        }
    },
    compoundVariants: [
        {
            checked: true,
            focused: true,
            css: {
                borderColor: '$primary',
                backgroundColor: '$primary',
            }
        },
        {
            indeterminate: true,
            focused: true,
            css: {
                backgroundImage: 'linear-gradient(45deg, transparent, transparent 49%, $primary 50%, $primary 100%)'
            }
        }
    ]
});

const Label = styled('span', {
    fontSize: '$fz1',
    color: '$white70',

});

type TProps = {
    onChange: (event: any) => void;
    checked: boolean | undefined;
    labelElement: string | JSX.Element;
    indeterminate?: boolean;
}

export const Checkbox = (props: TProps) => {
    const [focused, setFocused] = React.useState(false);

    React.useEffect(() => {
        if (props.checked && props.indeterminate) {
            console.warn('Warning: Checkbox component received two contradictory parameters: checked and indeterminate');
        }
    }, [props.checked, props.indeterminate]);

    return (
        <Wrapper>
            <Input className="visually-hidden"
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                onChange={props.onChange}
                type="checkbox"
                checked={props.checked} />
            <FakeInput checked={props.checked}
                focused={focused}
                indeterminate={props.indeterminate} />
            <Label>{props.labelElement}</Label>
        </Wrapper>
    )
};
