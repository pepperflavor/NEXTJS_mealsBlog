export default function BlogPostPage({ params }) {
  // 동적으로 할당한 값에 접근가능
  const {} = params;
  return (
    <main>
      <h1>Blog Page</h1>
      <p>{params.slug}</p>
    </main>
  );
}
