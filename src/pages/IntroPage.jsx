import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Shield, Lock, Eye } from 'lucide-react';
import GraphCard from '../components/GraphCard';
import { BackgroundBeams } from '../components/ui/background-beams';
import { GlareCard } from '../components/ui/glare-card';
import { SparklesCore } from '../components/ui/sparkles';
import AnimatedTestimonials from '../components/ui/animated-testimonials';
import zeroKnowledgeImg from "../assests/zero-knowledge.jpg";
import { cn } from "../lib/utils";

export default function IntroPage() {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(null);

  const testimonials = [
    {
      quote: "Using AES-256-GCM (Galois/Counter Mode), each file is encrypted with a unique 32-byte random key and a 12-byte initialization vector. GCM mode provides both encryption and authentication, ensuring your data remains confidential and tamper-proof.",
      name: "AES-256-GCM Encryption",
      designation: "Military-grade encryption with authenticated encryption mode",
      src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=3874&auto=format&fit=crop",
    },
    {
      quote: "Your encryption key is embedded invisibly into the least significant bits of a random PNG image fetched from Pexels. This technique makes it impossible to detect that the image contains hidden data. The key becomes part of the image itself, providing an elegant solution to key storage without traditional password management.",
      name: "Steganography",
      designation: "Encryption keys hidden inside PNG images using advanced techniques",
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=3540&auto=format&fit=crop",
    },
    {
      quote: "Your encryption keys are never transmitted to or stored on our servers in any form. The key exists only in the PNG image you download. This zero-knowledge architecture means even if our servers were compromised, your encrypted files would remain secure. Only you possess the means to decrypt your data.",
      name: "Zero Knowledge",
      designation: "Keys never stored on servers - only you control decryption",
      src: zeroKnowledgeImg,
    },
    {
      quote: "Built on Node.js with Express, our backend processes encryption operations in milliseconds. Files are stored efficiently in MongoDB, with the entire encryption pipeline optimized for speed. Upload your file and receive your encrypted version with the key-image almost instantly, no matter the file type.",
      name: "Fast Processing",
      designation: "Instant encryption and decryption up to 15MB files",
      src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=3464&auto=format&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-16 relative overflow-hidden">
      <Helmet>
        <title>Obscura - Home</title>
      </Helmet>
      <div className="absolute inset-0">
        <BackgroundBeams className="opacity-40" />
      </div>
      <div className="max-w-9xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-500/30 blur-3xl" />
              <Shield className="w-36 h-36 md:w-48 md:h-48 text-cyan-400 relative animate-pulse" />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-audiowide mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              OBSCURA
            </span>
          </h1>

          <div className="w-full max-w-2xl mx-auto h-40 relative mb-6">
            <div className="absolute inset-x-10 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm left-1/2 -translate-x-1/2" />
            <div className="absolute inset-x-10 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4 left-1/2 -translate-x-1/2" />
            <div className="absolute inset-x-20 top-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-[5px] w-1/2 blur-sm left-1/2 -translate-x-1/2" />
            <div className="absolute inset-x-20 top-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-px w-1/2 left-1/2 -translate-x-1/2" />

            <SparklesCore
              background="transparent"
              minSize={0.8}
              maxSize={2}
              particleDensity={500}
              className="w-full h-full"
              particleColor="#FFFFFF"
              speed={2}
            />

            <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_100px_at_top,transparent_20%,white)]"></div>
          </div>

          <p className="text-2xl text-gray-400 mb-4 max-w-3xl mx-auto">
            Secure File Encryption with Invisible Key Storage
          </p>

          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
            Hide your encryption keys inside images. No passwords to remember, no keys to store.
            Just upload, encrypt, and download your key-image.
          </p>

          <div className="flex gap-4 justify-center">
            <button
              onClick={() => navigate('/encrypt')}
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-bold text-lg overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/70"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center gap-2">
                <Lock className="w-5 h-5" />
                Start Encrypting
              </span>
            </button>

            <button
              onClick={() => navigate('/decrypt')}
              className="px-8 py-4 bg-gray-800/50 border border-gray-700 hover:border-cyan-500 rounded-xl font-bold text-lg transform hover:scale-105 transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                <Eye className="w-5 h-5" />
                Decrypt File
              </span>
            </button>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mb-20">
          <AnimatedTestimonials testimonials={testimonials} />
        </div>

        <div className="mb-24">
          <h2 className="text-3xl md:text-4xl font-lato font-semibold text-center mb-12">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Live Encryption Stats
            </span>
          </h2>
          <div className="max-w-2xl mx-auto">
            <GraphCard />
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-lato font-semibold text-center mb-20">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              How It Works
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[{
              step: '01',
              title: 'Upload File',
              points: [
                'Choose any file type up to 15MB',
                'Runs client-side validations (type & size)',
                'No keys or secrets leave your device',
              ],
            },
            {
              step: '02',
              title: 'Encrypt & Store',
              points: [
                'AES‑256‑GCM with random 32‑byte key',
                '12‑byte IV per file, authenticated tag',
                'Encrypted blob stored and returns File ID',
              ],
            },
            {
              step: '03',
              title: 'Key Image',
              points: [
                'Key embedded invisibly into PNG (LSB)',
                'Image looks normal, cannot be detected',
                'You download and keep the key‑image only',
              ],
            },
            {
              step: '04',
              title: 'Decrypt Anytime',
              points: [
                'Provide File ID + key‑image',
                'Server reconstructs key and decrypts',
                'Original file is streamed back to you',
              ],
            }].map((card, index) => (
              <div
                key={index}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                className={cn(
                  "rounded-lg relative transition-all duration-300 ease-out",
                  hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
                )}
              >
                <GlareCard
                  containerClassName="w-full"
                  className="flex flex-col items-start justify-start p-4 md:p-6"
                >
                  <div className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400/50 to-blue-500/50 bg-clip-text text-transparent mb-2">
                    {card.step}
                  </div>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white mb-4 md:mb-5">{card.title}</h3>
                  <ul className="text-gray-300 text-sm md:text-base space-y-2 md:space-y-3 list-disc pl-5">
                    {card.points.map((p, i) => (
                      <li key={i} className="leading-relaxed">{p}</li>
                    ))}
                  </ul>
                </GlareCard>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}