import { useState } from 'react';
import { PageLayout } from './components/layout/PageLayout';
import { StyleSelector } from './components/StyleSelector';
import { TextArea } from './components/TextArea';
import { Button } from './components/ui/Button';
import { History } from './pages/History';
import { Account } from './pages/Account';
import { Pricing } from './pages/Pricing';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'editor' | 'history' | 'account' | 'pricing'>('editor');
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [selectedStyle, setSelectedStyle] = useState<string>('Standard');
  const [isUltraEnabled, setIsUltraEnabled] = useState(false);

  const handleHumanize = () => {
    setOutputText('Paraphrased text will appear here');
  };

  return (
    <PageLayout currentPage={currentPage} onPageChange={setCurrentPage}>
      {currentPage === 'editor' ? (
        <>
          <h1 className="text-4xl font-serif text-center mb-12 text-amber-800">
            Humanize AI text
          </h1>

          <StyleSelector
            selectedStyle={selectedStyle}
            onStyleSelect={setSelectedStyle}
            isUltraEnabled={isUltraEnabled}
            onUltraToggle={() => setIsUltraEnabled(!isUltraEnabled)}
          />

          <div className="grid grid-cols-2 gap-6">
            <TextArea
              value={inputText}
              onChange={setInputText}
              placeholder="Insert (English) text here"
            />
            <TextArea
              value={outputText}
              placeholder="Paraphrased text will appear here"
              readOnly
            />
          </div>

          <div className="flex justify-center mt-8">
            <Button variant="primary" onClick={handleHumanize}>
              Humanize AI
            </Button>
          </div>
        </>
      ) : currentPage === 'history' ? (
        <History />
      ) : currentPage === 'pricing' ? (
        <Pricing />
      ) : (
        <Account />
      )}
    </PageLayout>
  );
}