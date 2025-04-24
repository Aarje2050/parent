#!/bin/bash

# Script to set up and run the Zobli website

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}=== Setting up Zobli Website ===${NC}"

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "npm is not installed. Please install Node.js and npm first."
    exit 1
fi

# Install dependencies
echo -e "${GREEN}Installing dependencies...${NC}"
npm install

# Create necessary directories if they don't exist
echo -e "${GREEN}Creating necessary directories...${NC}"
mkdir -p public/images/team
mkdir -p public/images/services

# Copy placeholder images if they exist
if [ ! -f "public/images/logo.svg" ]; then
    echo -e "${GREEN}Setting up placeholder images...${NC}"
    # Note: The actual images should have been created already
fi

# Start the development server
echo -e "${GREEN}Starting development server...${NC}"
echo -e "${BLUE}Please open http://localhost:3000 in your browser${NC}"
npm run dev