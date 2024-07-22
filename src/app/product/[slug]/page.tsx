type DetailProductPageProps = { params : {slug : string} }
export default function DetailProductPage(props : DetailProductPageProps) {
    const { params } = props;
    return (
        <div>
            <h1>Detail Product Page</h1>
            <h2>{params.slug}</h2>
        </div>
    )
}