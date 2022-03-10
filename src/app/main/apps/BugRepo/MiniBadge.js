import _ from 'lodash';
import clsx from 'clsx';
import './bttn.css'
export const Riskstate = [
    {
        id: 10,
        name: '',
        color: '',
    },
    {
        id: 11,
        name: 'Low',
        color: 'bg-green text-white',
    },
    {
        id: 12,
        name: 'Medium',
        color: 'bg-orange text-black',
    },
    {
        id: 13,
        name: 'High',
        color: 'bg-red text-white',
    },
    {
        id: 14,
        name: 'Critical',
        color: 'bg-marron text-white',
    },
    {
        id: 14,
        name: 'Info',
        color: 'bg-blue text-white',
    },
];
function MiniBadge(props) {
    if (props.name == '') {
        return <></>;
    }
    else {
        return (<><div
            className={clsx(
                'inline text-12 font-semibold py-4 px-12 rounded-full truncate',
                _.find(Riskstate, { name: props.name }).color
            )}
        >

        </div>    {"  " + props.name}</>);

    }
}

export default MiniBadge;