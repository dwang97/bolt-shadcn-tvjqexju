interface PageHeaderProps {
  title: string;
}

export function PageHeader({ title }: PageHeaderProps) {
  return (
    <h1 className="text-4xl font-serif text-center mb-12 text-amber-800">
      {title}
    </h1>
  );
}