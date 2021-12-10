class SongsController < ApplicationController
  before_action :set_artist

  def index
    @songs = @artist.songs
    render component: 'Songs', props: { artist: @artist, songs: @songs }
  end

  def show
    @song = @artist.songs.find(params[:id])
    render component: 'Song', props: { artist: @artist, song: @song }
  end

  def new
    @song = @artist.songs.new
    render component: 'SongNew', props: { artist: @artist, song: @song }
  end

  def create
    @song = @artist.songs.new(song_params)
    if @song.save
      redirect_to artist_songs_path(@artist)
    else
      render component: 'SongNew', props: { artist: @artist, song: @song }
    end
  end

  def edit
    @song = @artist.songs.find(params[:id])
    render component: 'SongEdit', props: { artist: @artist, song: @song }
  end

  def update
    @song = @artist.songs.find(params[:id])
    if @song.update(song_params)
    redirect_to artist_songs_path(@artist)
    else
      render component: 'SongEdit', props: { artist: @artist, song: @song }
    end
  end

  def destroy
    @song = @artist.songs.find(params[:id])
    @song.destroy
    redirect_to artist_songs_path(@artist)
  end

  private 
    def song_params
      params.require(:song).permit(:title, :album)
    end
    def set_artist
      @artist = Artist.find(params[:artist_id])
    end
end
