function Default({
  children,
  github,
}: {
  children: React.ReactNode
  github: string
}) {
  return (
    <div className="relative h-full">
      {children}

      {/* 右上角 GitHub 链接 */}
      <div className="fixed top-4 right-4 z-20">
        <a
          className="i-carbon-logo-github text-2xl text-white opacity-75 transition hover:opacity-100"
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
        ></a>
      </div>
    </div>
  )
}

export default Default
