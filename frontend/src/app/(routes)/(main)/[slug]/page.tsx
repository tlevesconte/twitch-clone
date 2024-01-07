export default function Page({ params }: { params: { slug: string } }) {
  return <div>test: {params.slug}</div>;
}
