
import React, { useState, useRef, useEffect, KeyboardEvent } from 'react';
import { ScrollArea } from "@/components/ui/scroll-area";

interface HistoryItem {
  type: 'input' | 'output';
  content: string;
}

const InteractiveTerminal: React.FC = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([
    { type: 'output', content: 'Welcome to 221B. Type `help` for a list of commands.' }
  ]);
  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [history]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleCommand = (command: string) => {
    const trimmedCommand = command.trim();
    const newHistory: HistoryItem[] = [...history, { type: 'input', content: trimmedCommand }];
    
    if (trimmedCommand === '') {
        setHistory(newHistory);
        setInput('');
        return;
    }
    
    let output = '';

    const [cmd, ...args] = trimmedCommand.toLowerCase().split(' ');

    switch (cmd) {
      case 'help':
        output = 'Available commands: help, whoami, ls, clear, date, echo [text], banner, mystery, oneliner';
        break;
      case 'whoami':
        output = 'you know who I am.';
        break;
      case 'ls':
        output = `hehe not so fast, confidential information.`;
        break;
      case 'clear':
        setHistory([]);
        setInput('');
        return;
      case 'date':
        output = new Date().toLocaleString();
        break;
      case 'echo':
        output = args.join(' ');
        break;
      case 'banner':
        output = 'WELCOME TO HACKER STREET';
        break;
      case 'eurus':
        output = 'My dear dear sister';
        break;
      case 'enola':
        output = 'Henry Cavill is a genius';
        break;
      case 'mycroft':
        output = 'brother mine';
        break;
      case 'mystery':
        output = 'try some commands which aren\'t listed here, you might stumble upon something interesting';
        break;
      case 'irene':
        output = 'she is truly sherlocked';
        break;
      case 'whyami':
        output = 'because I try to make sense of things which don\'t make sense';
        break;
      case 'purpose':
        output = 'happiness';
        break;
      case 'oneliner':
        output = 'creator, through different mediums, this one\'s technology';
        break;
      case 'watson':
        output = 'iraq or afghanistan';
        break;
      case 'poirot':
        output = 'what a guy!';
        break;
      case 'shutup':
        output = 'sorry, but I cannot do that';
        break;
      default:
        output = `command not found: ${command}`;
        break;
    }
    
    setHistory([...newHistory, { type: 'output', content: output }]);
    setInput('');
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleCommand(input);
    }
  };
  
  const handleClick = () => {
    inputRef.current?.focus();
  };

  return (
    <div className="bg-cyber-dark border border-terminal-green/30 max-w-4xl mx-auto mb-20" onClick={handleClick}>
      <div className="bg-cyber-grey px-4 py-2 border-b border-terminal-green/30 flex items-center space-x-2">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-terminal-green"></div>
        <span className="text-terminal-green/70 text-sm ml-4">terminal@221B:~$</span>
      </div>
      <ScrollArea className="h-96">
        <div className="p-6 font-mono text-terminal-green">
            {history.map((item, index) => (
            <div key={index} className="mb-2">
                {item.type === 'input' ? (
                <div className="flex items-center">
                    <span className="text-terminal-bright-green">client@221B</span>
                    <span className="text-white">:</span>
                    <span className="text-blue-400">~</span>
                    <span className="text-white">$ </span>
                    <span>{item.content}</span>
                </div>
                ) : (
                <div className="text-terminal-green/80" style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>{item.content}</div>
                )}
            </div>
            ))}
            
            <div className="flex items-center relative">
            <span className="text-terminal-bright-green">client@221B</span>
            <span className="text-white">:</span>
            <span className="text-blue-400">~</span>
            <span className="text-white">$ </span>
            <span style={{ whiteSpace: 'pre' }}>{input}</span>
            <span className="cursor"></span>
            <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="absolute left-0 top-0 w-full h-full bg-transparent border-none opacity-0 cursor-default"
                autoFocus
                spellCheck="false"
            />
            </div>
            <div ref={terminalEndRef} />
        </div>
      </ScrollArea>
    </div>
  );
};

export default InteractiveTerminal;

