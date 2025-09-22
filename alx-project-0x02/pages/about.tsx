import Header from "@/components/layout/Header";
import Button from "@/components/common/Button";

export default function AboutPage() {
  const handleClick = () => {
    alert("Button on About page clicked!");
  };

  return (
    <div>
      <Header />
      <main className="p-8">
        <h1 className="text-2xl font-bold">About Us</h1>
        <p>This is the about page.</p>

        <div className="mt-4">
          <Button label="Learn More" onClick={handleClick} />
          <Button label="Small Button" size="small" shape="rounded-sm" />
          <Button label="Medium Button" size="medium" shape="rounded-md" />
          <Button label="Large Button" size="large" shape="rounded-md" />
        </div>
      </main>
    </div>
  );
}
