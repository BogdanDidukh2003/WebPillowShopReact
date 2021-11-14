interface FooterIconProps {
    imageUrl: string;
}
export const FooterIcon = (props: FooterIconProps) => {
    const { imageUrl } = props;
    return (
        <div style={{ margin: "0 1rem" }}>
            <img src={imageUrl} />
        </div>
    );
};