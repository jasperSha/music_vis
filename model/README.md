pre-processing:
    find duplicates
    somehow do very rudimentary classification to see what's a song and what's not

    find how many songs have artists through metadata.csv
        see if i can remove songs without artists, or if i have to keep them
        cross reference with spotify api to see what features they have

can do unsupervised or supervised:
    in either case, spotify only useful enough to get their version of "features" as well as genres, but we probably don't really need that.
    if unsupervised, i think we have to come up with some n anonymous "classes" by which the neural net can assign weights to each feature as a proxy for relationship. so instead of the genre of rock or pop, we have features x_1, x_2, x_i, etc, by which certain songs in rock that are related to other songs in pop may have x_2 in common, and thus songs that fall in either category have their x_2 values hover around the same ranges
    
    if supervised, here are some possible features we can engineer without having to call spotify's api:
        - zero crossing rate: number of times the soundwave crosses zero (dynamic songs like rock/metal have larger zero crossing rates)
        - spectral centroid: weighted mean of the frequences present in the signal, calculated with an FFT
        - rolloff frequency: the center frequency of a spectrogram bin such that some percentage(default=0.85) of the energy of the spectrum lies within this range(with roll_percent=1 or 0, this gives us the max or min frequency of the song)
        - mel frequency cepstral coefficients(mfcc) that describe the overall shape of a spectral envelope, in music known as the timbre of a segment of a song
        - spectral contrast: considers spectral peak, valley, and difference in each frequency subband
        - spectral bandwidth computes the order- p spectral bandwidth, with p=2, it's a weighted standard deviation of the frequencies
        - spectral flatness: ratio of the geometric mean to the arithmetic mean of a power spectrum
        - chromagram of the power spectrogram
        - silence counting

These features are extremely large wrt the songs, as their size==the number of frames in the signal. So we can just look at the max, min, std dev, mean, kurtosis, and skew of each feature


we should first perform PCA(principal component analysis), then we can try a simple k means clustering (pick a multitude more clusters than there are genres to account for subgenres and the like)
    note: standardize data before applying PCA
        - also, pca requires defined features (so our rolloff, mfccs, etc.) in order to merge/morph them together into a reduced number of some n_features, anonymized (since we're essentially pulling the top number(n_features) eigenvectors, ranked by their eigenvalues)
    



modeling:
    conditional dcgan --> embed genre, then train to get realistic songs under each category

    discriminator can be detached to classify new songs, or cluster



visualization:
    bezier curves (degree 3 probably)
    force layout algorithm
    node size degree
