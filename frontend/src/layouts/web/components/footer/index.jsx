export default function Footer() {
  return (
    <footer className="w-full border-t border-border/40 h-20 py-2 grid">
      <div className="container max-w-3xl flex flex-col sm:flex-row items-center justify-center text-primary/40">
        © 2024 {import.meta.env.VITE_APP_TITLE} &nbsp;
        <span>All Rights Reserved</span>
      </div>
    </footer>
  );
}
