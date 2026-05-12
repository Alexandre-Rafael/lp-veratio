import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import Layout from "@/components/layout/Layout";
import { GeometricPattern } from "@/components/shared/BrandElements";

interface LegalPageProps {
  fileName: string;
  title: string;
}

const LegalPage = ({ fileName, title }: LegalPageProps) => {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/compliance/${fileName}`)
      .then((res) => res.text())
      .then((text) => {

        setContent(text);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load markdown", err);
        setLoading(false);
      });
  }, [fileName]);

  return (
    <Layout>
      <div className="relative overflow-hidden bg-gradient-to-b from-white to-veratio-bg-gray dark:from-background dark:to-background pt-12 pb-16">
        <GeometricPattern className="opacity-50" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl lg:text-4xl font-normal text-veratio-navy dark:text-foreground mb-8 tracking-tight">
              {title}
            </h1>
            <div className="bg-white dark:bg-card rounded-2xl p-8 lg:p-12 shadow-sm border border-gray-100 dark:border-border">
              {loading ? (
                <div className="animate-pulse space-y-4">
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                </div>
              ) : (
                <div className="legalMarkdown prose prose-sm prose-veratio dark:prose-invert max-w-none text-veratio-gray dark:text-muted-foreground prose-h2:mt-14 prose-h2:mb-6 prose-h3:mt-10 prose-h3:mb-4 prose-p:mb-6 prose-p:leading-relaxed prose-ul:my-8 prose-li:my-3 [&>p:first-of-type]:mb-10">
                  <ReactMarkdown>{content}</ReactMarkdown>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LegalPage;
