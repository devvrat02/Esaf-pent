import _ from 'lodash';
import clsx from 'clsx';
import './bttn.css'
export const Riskstate = [
    {
        id: 10,
        name: '',
        color: 'bg',
    },
    {
        id: 11,
        name: 'Low',
        color: 'bg-yellow',
    },
    {
        id: 12,
        name: 'Medium',
        color: 'bg-orange',
    },
    {
        id: 13,
        name: 'High',
        color: 'bg-red',
    },
    {
        id: 14,
        name: 'Critical',
        color: 'bg-marron',
    },
    {
        id: 14,
        name: 'Info',
        color: 'bg-green',
    },
];
function MiniBadge(props) {
    if (props.name == '') {
        return <></>;
    }
    else {
        return (<>{props.name + " "}<div sx={{ marginLeft: "1%" }}
            className={clsx(
                'inline text-12 ml-10 font-semibold py-4 px-12 rounded-full truncate',
                _.find(Riskstate, { name: props.name }).color
            )}
        >

        </div>    </>);

    }
}

export default MiniBadge;