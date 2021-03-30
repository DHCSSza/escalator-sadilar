---
widget: portfolio
title: Global training resources
headless: true  # This file represents a page section.

content:
  # Page type to display. E.g. project.
  page_type: training

  # Default filter index (e.g. 0 corresponds to the first `filter_button` instance below)
  filter_default: 0

  # Filter toolbar (optional).
  # Add or remove as many filters (`filter_button` instances) as you like.
  # To show all items, set `tag` to "*".
  # To filter by a specific tag, set `tag` to an existing tag name.
  # To remove toolbar, delete/comment all instances of `filter_button` below.
  filter_button:
    - name: All
      tag: '*'
    - name: Free
      tag: Free
    - name: OER
      tag: OER
    - name: Data analysis
      tag: Data analysis
    - name: Data visualisation
      tag: Data visualisation
    - name: Data cleaning
      tag: Data cleaning
    - name: NLP
      tag: NLP
    - name: History
      tag: History
    - name: Other
      tag: Other
design:
  # Choose how many columns the section has. Valid values: 1 or 2.
  columns: '1'
  # Toggle between the various page layout types.
  #   1 = List
  #   2 = Compact  
  #   3 = Card
  #   5 = Showcase
  view: 2

  # For Showcase view, flip alternate rows?
  flip_alt_rows: false

---