'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Search, X, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';

// Mock search results - would be replaced with actual API call
const mockSearchResults = {
  artworks: [
    { id: '1', title: 'Abstract Composition in Blue', artist: 'Emily Richards', type: 'artwork' },
    { id: '2', title: 'Urban Landscape #5', artist: 'David Kim', type: 'artwork' },
    { id: '3', title: 'Convergence Series', artist: 'Sarah Johnson', type: 'artwork' },
  ],
  artists: [
    { id: '1', name: 'Emily Richards', specialty: 'Abstract Painting', type: 'artist' },
    { id: '2', name: 'David Kim', specialty: 'Urban Photography', type: 'artist' },
    { id: '3', name: 'Sarah Johnson', specialty: 'Mixed Media', type: 'artist' },
  ],
  exhibitions: [
    { id: '1', title: 'High Point Market', type: 'exhibition' },
    { id: '3', title: 'Light & Form: A Photography Exhibition', type: 'exhibition' },
    { id: '5', title: 'Textile Narratives: Woven Stories', type: 'exhibition' },
  ],
  collections: [
    { id: '1', name: 'Abstract Expressionism', type: 'collection' },
    { id: '2', name: 'Contemporary Photography', type: 'collection' },
    { id: '3', name: 'Limited Edition Prints', type: 'collection' },
  ],
};

export function SearchDialog() {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [results, setResults] = useState<any[]>([]);
  const router = useRouter();

  const handleSearch = useCallback(
    async (query: string) => {
      if (query.length < 2) {
        setResults([]);
        return;
      }

      setIsSearching(true);

      // Simulate API call with timeout
      setTimeout(() => {
        const lowerQuery = query.toLowerCase();
        
        // Filter mock results based on query
        const filteredArtworks = mockSearchResults.artworks.filter(
          (artwork) => 
            artwork.title.toLowerCase().includes(lowerQuery) || 
            artwork.artist.toLowerCase().includes(lowerQuery)
        );
        
        const filteredArtists = mockSearchResults.artists.filter(
          (artist) => 
            artist.name.toLowerCase().includes(lowerQuery) || 
            artist.specialty.toLowerCase().includes(lowerQuery)
        );
        
        const filteredExhibitions = mockSearchResults.exhibitions.filter(
          (exhibition) => exhibition.title.toLowerCase().includes(lowerQuery)
        );
        
        const filteredCollections = mockSearchResults.collections.filter(
          (collection) => collection.name.toLowerCase().includes(lowerQuery)
        );
        
        // Combine all results
        const allResults = [
          ...filteredArtworks,
          ...filteredArtists,
          ...filteredExhibitions,
          ...filteredCollections,
        ];
        
        setResults(allResults);
        setIsSearching(false);
      }, 500);
    },
    []
  );

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      handleSearch(searchQuery);
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery, handleSearch]);

  const handleResultClick = (result: any) => {
    setOpen(false);
    
    // Navigate based on result type
    switch (result.type) {
      case 'artwork':
        router.push(`/shop/${result.id}`);
        break;
      case 'artist':
        router.push(`/artists/${result.id}`);
        break;
      case 'exhibition':
        router.push(`/exhibitions/${result.id}`);
        break;
      case 'collection':
        router.push(`/shop?category=${result.name.toLowerCase().replace(/\s+/g, '-')}`);
        break;
      default:
        break;
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon">
          <Search className="h-5 w-5" />
          <span className="sr-only">Search</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[550px]">
        <DialogHeader>
          <DialogTitle>Search Gallery</DialogTitle>
          <DialogDescription>
            Search for artworks, artists, exhibitions, and collections
          </DialogDescription>
        </DialogHeader>
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search..."
            className="pl-10 pr-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            autoFocus
          />
          {searchQuery && (
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-1 top-1 h-8 w-8"
              onClick={() => setSearchQuery('')}
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>
        
        <div className="mt-4 max-h-[300px] overflow-y-auto">
          {isSearching ? (
            <div className="flex items-center justify-center py-8">
              <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
            </div>
          ) : results.length > 0 ? (
            <div className="space-y-4">
              {results.map((result, index) => (
                <button
                  key={`${result.type}-${result.id || index}`}
                  className="w-full text-left px-4 py-3 rounded-md hover:bg-muted transition-colors"
                  onClick={() => handleResultClick(result)}
                >
                  {result.type === 'artwork' && (
                    <div>
                      <div className="font-medium">{result.title}</div>
                      <div className="text-sm text-muted-foreground">
                        {result.artist} • Artwork
                      </div>
                    </div>
                  )}
                  
                  {result.type === 'artist' && (
                    <div>
                      <div className="font-medium">{result.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {result.specialty} • Artist
                      </div>
                    </div>
                  )}
                  
                  {result.type === 'exhibition' && (
                    <div>
                      <div className="font-medium">{result.title}</div>
                      <div className="text-sm text-muted-foreground">Exhibition</div>
                    </div>
                  )}
                  
                  {result.type === 'collection' && (
                    <div>
                      <div className="font-medium">{result.name}</div>
                      <div className="text-sm text-muted-foreground">Collection</div>
                    </div>
                  )}
                </button>
              ))}
            </div>
          ) : searchQuery.length > 1 ? (
            <div className="text-center py-8 text-muted-foreground">
              No results found for "{searchQuery}"
            </div>
          ) : null}
        </div>
      </DialogContent>
    </Dialog>
  );
}
