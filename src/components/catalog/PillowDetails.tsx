import { useContext } from 'react';
import { RouteComponentProps, useParams, withRouter } from 'react-router-dom';
import { PillowContext } from '../../App';
import { Pillow } from '../../models/pillow';
import { Button } from '../button/Button';

type PillowDetailsProps = RouteComponentProps;
export const PillowDetails = (props: PillowDetailsProps) => {
    const { pillows } = useContext(PillowContext);
    const { id } = useParams<{ id: string }>();
    const pillow: Pillow = pillows.find(x => x.id == parseInt(id))!;
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "spaceBetween",
            margin: "3rem"
        }}>
            <div style={{
                display: "flex",
                flexDirection: "row"
            }}>
                <img src={pillow.imgUrl} style={{
                    maxWidth: "840px",
                    maxHeight: "400px",
                    margin: "3rem"
                }} />
                <div>
                    <h1>{pillow.title}</h1>
                    <p style={{
                        textAlign: "left"
                    }}>{pillow.description}</p>
                </div>
            </div>
            <div>
                <div><b>Price: ${pillow.price}</b></div>
                <div>
                    <Button label='Go back' onClick={() => props.history.goBack()} />
                    <Button label='Add to cart' />
                </div>
            </div>
        </div>
    )
}

export default withRouter(PillowDetails);
