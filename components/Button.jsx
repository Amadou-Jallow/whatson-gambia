import Link from "next/link";
import clsx from "clsx";

export default function Button({
  href,
  children,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
  external = false,
}) {
  const baseStyles =
    "inline-block px-6 py-3 font-semibold rounded-md transition text-center focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-primary text-gray-900 hover:bg-primary-dark shadow-sm focus:ring-primary focus:ring-offset-background-light dark:text-gray-900 dark:hover:bg-primary-dark",
    secondary:
      "bg-secondary text-white hover:bg-secondary-dark focus:ring-secondary focus:ring-offset-background-light dark:bg-secondary-dark dark:hover:bg-secondary",
    outline:
      "border border-border-light text-text-light hover:bg-background-light focus:ring-primary focus:ring-offset-background-light dark:border-border-dark dark:text-text-dark dark:hover:bg-background-dark",
  };

  const combined = clsx(baseStyles, variants[variant], className);

  if (href) {
    return external ? (
      <a href={href} target="_blank" rel="noreferrer" className={combined}>
        {children}
      </a>
    ) : (
      <Link href={href} className={combined}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combined}>
      {children}
    </button>
  );
}
